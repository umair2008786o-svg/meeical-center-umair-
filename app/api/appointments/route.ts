import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  const { patient, reason, date, time, doctor } = body
  if (!patient || !reason || !date || !time || !doctor) return NextResponse.json({ error: 'All appointment fields are required.' }, { status: 400 })
  await sql`CREATE TABLE IF NOT EXISTS appointments (id SERIAL PRIMARY KEY, patient TEXT NOT NULL, reason TEXT NOT NULL, appointment_date DATE NOT NULL, appointment_time TEXT NOT NULL, doctor TEXT NOT NULL, status TEXT NOT NULL DEFAULT 'Waiting', created_at TIMESTAMPTZ DEFAULT NOW())`
  const result = await sql`INSERT INTO appointments (patient, reason, appointment_date, appointment_time, doctor) VALUES (${patient}, ${reason}, ${date}, ${time}, ${doctor}) RETURNING id, patient, reason, appointment_time AS time, doctor, status`
  return NextResponse.json(result.rows[0], { status: 201 })
}
