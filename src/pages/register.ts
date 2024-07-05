export async function GET({
  redirect,
}: {
  redirect: (val: string, status: number) => void;
}) {
  return redirect(
    "https://app.formbricks.com/s/clw5sqnea02e0109cpehm035r",
    307,
  );
}
