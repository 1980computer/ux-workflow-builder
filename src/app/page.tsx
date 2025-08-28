'use client';

import { redirect } from 'next/navigation';

export default function Home() {
  // Redirect to the workflow page which contains the sophisticated AI workflow
  redirect('/workflow');
}
