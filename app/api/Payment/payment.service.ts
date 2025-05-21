import { type IPayment } from "./payment.dto";
import { pool } from "../../common/services/sql.service";
import { type RowDataPacket, type ResultSetHeader } from "mysql2";


export const createPayment = async (data: IPayment) => {
  const query = `
    INSERT INTO payment (
      user_id, payment_amount, payment_transaction_id, payment_datetime, status
    ) VALUES (?, ?, ?, ?, ?)`;

  const values = [
    data.user_id,
    data.payment_amount,
    data.payment_transaction_id,
    data.payment_datetime,
    data.status
  ];

  const [result] = await pool.execute<ResultSetHeader>(query, values);
  return { id: result.insertId, ...data };
};


export const updatePayment = async (id: number, data: IPayment) => {
  const query = `
    UPDATE payment SET
       payment_amount = ?, payment_transaction_id = ?, 
      payment_datetime = ?, status = ?
    WHERE id = ?`;

  const values = [
    data.payment_amount,
    data.payment_transaction_id,
    data.payment_datetime,
    data.status,
    id
  ];

  await pool.execute(query, values);
  return { id, ...data };
};


export const editPayment = async (
  id: number,
  data: IPayment
): Promise<IPayment & { id: number }> => {
  let query = "UPDATE payment SET ";
  const updates: string[] = [];
  const values: any[] = [];

  Object.keys(data).forEach((key) => {
    updates.push(`${key} = ?`);
    values.push((data as any)[key]);
  });

  query += updates.join(", ") + " WHERE id = ?";
  values.push(id);

  await pool.execute(query, values);
  return { id, ...(data as IPayment) };
};


export const deletePayment = async (id: number) => {
  const query = "DELETE FROM payment WHERE id = ?";
  await pool.execute(query, [id]);
  return { id, deleted: true };
};

export const getPaymentById = async (id: number) => {
  const query = "SELECT * FROM payment WHERE id = ?";
  const [rows] = await pool.execute<RowDataPacket[]>(query, [id]);
  return rows[0] || null;
};


export const getAllPayments = async () => {
  const query = "SELECT * FROM payment";
  const [rows] = await pool.execute(query);
  return rows;
};
