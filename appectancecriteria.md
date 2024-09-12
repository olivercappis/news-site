Acceptance Criteria:

1. Global Landing Page (Before Login)

    Grid of top news (World, Tech, Sports, etc).
    Navigation: "Login" and "Sign Up."
    Visitors browse news without logging in.
    Redirects to personalized page after login.

2. Sign-Up and Login Page

    Users sign up with email/password or log in.
    Redirects to personalized page.
    Error handling for invalid credentials.

3. Personalized Landing Page (After Login)

    Displays user-selected widgets.
    Layout saved and persistent.

4. Customizable Widgets in Settings

    Users customize widgets (News, Weather, Sports).
    Preferences are saved and reflected.

5. Real-Time News Updates

    Widgets auto-refresh with real-time news.
    Clicking opens articles in new tab.
    Widgets update based on preferences.

6. Save and Load Layouts

    Widget layouts and preferences saved and restored across sessions.

7. Logout Functionality

    Log out redirects to global landing page.

8. Technical Implementation:

    Backend: API routes, MongoDB storage, third-party news APIs.

    Frontend: Responsive UI, drag-and-drop customization.

    Deployment: Secure JWT, deployed with live URL.