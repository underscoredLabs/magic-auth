/* 4️⃣ Implement Login Handler */
const handleLogin = async (e) => {
  const urlParams = new URLSearchParams(window.location.search);
  const email = urlParams.get("email");
  const redirectURI = `${window.location.origin}`;
  /* One-liner login 🤯 */
  await magic.auth.loginWithMagicLink({ email, redirectURI });
  render();
};
