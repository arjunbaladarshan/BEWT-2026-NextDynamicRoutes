import React from "react";

function LoginPage() {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Enter Username</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>Enter Password</td>
            <td>
              <input type="password" />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button>Login</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default LoginPage;
