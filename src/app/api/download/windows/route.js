import { NextResponse } from "next/server"

export function GET(){
    const filepath = new URL("/teacher_audit_setup.exe", process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000')
    return NextResponse.redirect(filepath)
}