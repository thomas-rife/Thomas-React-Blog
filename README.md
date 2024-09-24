# Thomas Rife's Blog App

## Introduction

This application serves as a platform for Thomas Rife to share articles and blog posts with the world. The app allows users to create, edit, and delete articles, and features a user-friendly interface for seamless content management.

## Unique Features

1. **Search Functionality**: The app includes a powerful search function that indexes all articles and instantly returns relevant results based on the user's input. If there are no matching articles, it provides a clear indication that no articles were found.

2. **HTML Text Editor**: When creating new articles, users can enjoy the convenience of an HTML text editor. This editor allows them to manipulate the text by changing the font size, applying bold, italics, pasting different colored text, and underlining styles, as well as creating bulleted or numbered lists. Any pasted formatting from other applications displays just as well here too!

3. **Secure Delete Functionality**: The app implements a robust delete function that enables the user who created a post to remove it from the Firestore database. This feature ensures that only the original author has the authority to delete their content, providing a secure and reliable data management system.

## Website Link

[Thomas Rife's Blog App on Firebase](https://blogapp-58ba1.web.app/)

## Additional Information

The application seamlessly integrates with the user's Google account, displaying their profile picture when signed in. If the user is not logged in, the app showcases a placeholder profile image to maintain a clean and uniform interface.

It displays a formatted date and time of posting as well, making it clear when articles were posted.

If you have pressed create a new article and don't wish to post anymore, simply click on the text "Thomas Rife's Blog App" in the top left corner, or click the "Cancel" button below submit and you will be redirected back to the main screen.

The new article function also supports the resizing of the text box! Feel free to resize it as small or as large as you like! (Only vertical movement)

It is also worth noting that the title entry has a character limit of 33 characters to prevent overflow characters onto the main article page. Make sure to keep it under 33!

## Installation

To deploy the application locally, follow these steps:

1. Clone the repository from [GitHub](https://github.com/lmu-cmsi2021-fall2023/firebase-backed-thomas-rife.git).
2. Install the necessary dependencies using the command: `npm install`.
3. Run the development server with the command: `npm start`.

- Local Users have not been given the ability to sign in for security purposes, if you would like to be added locally, send me an email.

## Usage

To use the application, follow these guidelines:

1. Sign in with your Google account to access functionality.
2. Create new articles, edit existing ones, and delete articles you have authored.
3. Enjoy the convenience of the search function and the user-friendly HTML text editor.

## Support

For any issues or inquiries, please contact Thomas Rife at trife371@gmail.com.
