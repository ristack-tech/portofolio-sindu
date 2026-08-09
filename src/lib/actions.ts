'use server'

import { submitContactMessage } from '@/lib/supabase'
import { redirect } from 'next/navigation'

export async function sendContactMessage(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const subject = formData.get('subject') as string
  const message = formData.get('message') as string
  await submitContactMessage({ name, email, subject: subject || undefined, message })
  redirect('/?sent=1')
}
