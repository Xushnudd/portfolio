export async function Request(url: string) {
  const req = await fetch(url)
  const res = await req.json()
  return res ?? "error"
}