/* 5️⃣ Implement Logout Handler */
const handleLogout = async () => {
  await magic.user.logout();
  document.getElementById("app").innerHTML = `See you soon 👋`;
};
