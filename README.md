**Password Manager**
### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/passowrd-manager-output-v0.gif" alt="password manager" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px) - No Passwords View](https://assets.ccbp.in/frontend/content/react-js/password-manager-no-passwords-sm-output-v2.png)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - Masked Passwords View](https://assets.ccbp.in/frontend/content/react-js/password-manager-masked-passwords-sm-output-v2.png)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - Show Passwords View](https://assets.ccbp.in/frontend/content/react-js/password-manager-sm-output-v2.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - No Passwords View](https://assets.ccbp.in/frontend/content/react-js/password-manager-no-passwords-lg-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Masked Passwords View](https://assets.ccbp.in/frontend/content/react-js/password-manager-masked-passwords-lg-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Show Passwords View](https://assets.ccbp.in/frontend/content/react-js/password-manager-lg-output.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality added</summary>
<br/>


- Initially, the website input, username input, and password input will be empty and [No Passwords View](https://assets.ccbp.in/frontend/content/react-js/password-manager-no-passwords-lg-output.png) will be displayed
- When non-empty values are provided for the website, username, and password and the **Add** button is clicked,
  - A new password item will be added to the list of passwords
  - The passwords count will be incremented by one
  - The **stars image** will be displayed in the password items instead of the passwords
  - The value of the input fields for website, username, and password will be updated to their initial values
  - When the **Show Password** is checked, then the password will be displayed instead of the **stars image**
- When a non-empty value is provided in the search input field, then password items whose website is matched with the search input value irrespective of the case will be displayed
- When a non-empty value is provided in the search input field, and if the website of any password item does not match the value given in the search input, then [No Passwords View](https://assets.ccbp.in/frontend/content/react-js/password-manager-no-passwords-lg-output.png) will be displayed
- When the delete button of a password item is clicked,
  - The respective password item will be deleted from the list of passwords
  - The passwords count will be decremented by one
- When all password items are deleted, then [No Passwords View](https://assets.ccbp.in/frontend/content/react-js/password-manager-no-passwords-lg-output.png) will be displayed
</details>



### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png](https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png) alt will be **app logo**
- [https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png](https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png) alt will be **password manager**
- [https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png](https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png) alt will be **password manager**
- [https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png](https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png) alt will be **website**
- [https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png](https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png) alt will be **username**
- [https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png](https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png) alt will be **password**
- [https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png](https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png) alt will be **search**
- [https://assets.ccbp.in/frontend/react-js/no-passwords-img.png](https://assets.ccbp.in/frontend/react-js/no-passwords-img.png) alt will be **no passwords**
- [https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png](https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png) alt will be **stars**
- [https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png](https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png) alt will be **delete**
</details>

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #9ba9eb; width: 150px; padding: 10px; color: black">Hex: #9ba9eb</div>
<div style="background-color: #c3caea; width: 150px; padding: 10px; color: black">Hex: #c3caea</div>
<div style="background-color: #5763a5; width: 150px; padding: 10px; color: black">Hex: #5763a5</div>
<div style="background-color: #f8fafc; width: 150px; padding: 10px; color: black">Hex: #f8fafc</div>
<div style="background-color: #454f84; width: 150px; padding: 10px; color: white">Hex: #454f84</div>
<div style="background-color: #0b69ff; width: 150px; padding: 10px; color: black">Hex: #0b69ff</div>
<div style="background-color: #94a3b8; width: 150px; padding: 10px; color: black">Hex: #94a3b8</div>
<div style="background-color: #b6c3ca; width: 150px; padding: 10px; color: black">Hex: #b6c3ca</div>
<div style="background-color: #7683cb; width: 150px; padding: 10px; color: black">Hex: #7683cb</div>
<div style="background-color: #f59e0b; width: 150px; padding: 10px; color: black">Hex: #f59e0b</div>
<div style="background-color: #10b981; width: 150px; padding: 10px; color: black">Hex: #10b981</div>
<div style="background-color: #f97316; width: 150px; padding: 10px; color: black">Hex: #f97316</div>
<div style="background-color: #14b8a6; width: 150px; padding: 10px; color: black">Hex: #14b8a6</div>
<div style="background-color: #b91c1c; width: 150px; padding: 10px; color: black">Hex: #b91c1c</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #0ea5e9; width: 150px; padding: 10px; color: black">Hex: #0ea5e9</div>
<div style="background-color: #64748b; width: 150px; padding: 10px; color: white">Hex: #64748b</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>
