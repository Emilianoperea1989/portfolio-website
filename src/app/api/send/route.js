//import { EmailTemplate } from '../../../compontents/BodyEmail.js';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend('re_i8QVGq4p_7U1FCFx1iECDyjsKoCnPuZ3j');
const fromEmail= process.env.FROM_EMAIL;

export async function POST( req ,res) {
  const {email, subject, message} = await req.json()
    console.log(email, subject, message)

  try {
    const data = await resend.emails.send({
      from: 'Emiliano <onboarding@resend.dev>',
      to: ['emilianoperea10@gmail.com'],
      subject: subject,
      react:(
        <>
          <h1>{subject}</h1>
          <p>{message}</p>
          <p>{email}</p>
        </>
      )
    })

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}