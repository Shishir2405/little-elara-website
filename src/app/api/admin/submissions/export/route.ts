import { connectDB } from "@/lib/db";
import { Submission } from "@/models/Submission";
import { getAdminSession } from "@/lib/admin-auth";
import ExcelJS from "exceljs";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Row = {
  name: string;
  phone: string;
  childAge?: string;
  program?: string;
  message?: string;
  status?: string;
  createdAt?: Date;
};

export async function GET() {
  const session = await getAdminSession();
  if (!session) return new Response("Unauthorized", { status: 401 });

  await connectDB();
  const items = await Submission.find().sort({ createdAt: -1 }).lean<Row[]>();

  const wb = new ExcelJS.Workbook();
  wb.creator = "Little Elara Steps";
  const ws = wb.addWorksheet("Enquiries");
  ws.columns = [
    { header: "Date", key: "date", width: 22 },
    { header: "Name", key: "name", width: 22 },
    { header: "Phone", key: "phone", width: 18 },
    { header: "Child's Age", key: "childAge", width: 14 },
    { header: "Program", key: "program", width: 28 },
    { header: "Message", key: "message", width: 44 },
    { header: "Status", key: "status", width: 12 },
  ];
  ws.getRow(1).font = { bold: true };

  for (const it of items) {
    ws.addRow({
      date: it.createdAt ? new Date(it.createdAt).toLocaleString("en-IN") : "",
      name: it.name,
      phone: it.phone,
      childAge: it.childAge ?? "",
      program: it.program ?? "",
      message: it.message ?? "",
      status: it.status ?? "new",
    });
  }

  const buffer = await wb.xlsx.writeBuffer();
  const date = new Date().toISOString().slice(0, 10);
  return new Response(buffer as ArrayBuffer, {
    headers: {
      "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "Content-Disposition": `attachment; filename="little-elara-enquiries-${date}.xlsx"`,
    },
  });
}
