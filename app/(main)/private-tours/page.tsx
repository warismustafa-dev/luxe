import { redirect } from 'next/navigation';

export default function PrivateToursPage() {
  // Private Tours are not currently offered; redirect users to Experiences
  redirect('/experiences');
}