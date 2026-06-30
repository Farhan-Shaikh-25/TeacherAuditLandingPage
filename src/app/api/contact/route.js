import { NextResponse } from "next/server";
import { Resend } from "resend";


const resend = new Resend(process.env.API_KEY)

export async function POST(request){
    const {name, email, topic, message} = await request.json()
    if(!name || !email || !message)
        return NextResponse.json({error: "Fields are required"}, {status: 400})

    try{
        await resend.emails.send({
            from: 'Teacher Audit <onboarding@resend.dev>',
            to: 'farhanshaikh25.fs@gmail.com',
            replyTo: email,
            subject: `New Message: ${topic || 'General Inquiry'}`,
            html: `
                <p><strong>From:</strong> ${name} (${email})</p>
                <p><strong>Topic:</strong> ${topic || 'N/A'}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        })

        return NextResponse.json({success: true})
    }catch(e){
        return NextResponse.json({error: 'Error sending email'}, {status: 500})
    }
}