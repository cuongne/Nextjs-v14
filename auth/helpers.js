'use server'
import { signIn as naSignIn, signOut as naSignOut } from '.'

export async function signIn(type,formData) {

  await naSignIn(type,formData)
}

export async function signOut() {
  await naSignOut()
}
