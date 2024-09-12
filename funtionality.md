1. Global Landing Page (Generic News)

This page is accessible to all users, whether logged in or not. It features global, generic news for everyone.
Features:
Top Navigation: Links to "Login" and "Sign Up."
News Feed: A default set of news widgets displaying general categories (e.g., Top Stories, World News, Tech News).
These widgets are static and not customizable for non-logged-in users.
News is pulled from APIs like TheNewsAPI and displayed dynamically.
UI Structure:

Main Section: A grid layout with several widgets, each displaying a different news category.
Sidebar: Optional (could show trending topics or general categories).

2. Login Page
User Flow: When a user clicks "Login" from the global landing page, they are directed to the login page.
Once logged in, users are redirected to their personalized landing page.
Features:
Login Form: Simple form with email and password fields, plus a "Sign Up" option if they don’t have an account.
Login Action: Once a user successfully logs in, it should fetch their settings from the database and redirect them to their personalized landing page.

3. Personalized Landing Page for Logged-In Users
After login, the user is taken to a personalized version of the landing page where they have selected widgets according to their profile settings.
Features:
Customizable News Widgets: Based on the user's preferences, widgets will display specific news categories, sports scores, weather, stocks, etc.
Drag-and-Drop: The layout can be rearranged by the user if desired.
Persistent Settings: The user's preferences are stored in the database and retrieved upon login.
Flow:

Fetching Settings: When the user logs in, their widget preferences are fetched from the database (e.g., "Tech News," "Weather for New York," "Sports Scores").
Rendering Custom Widgets: The dashboard renders these widgets dynamically in the user's preferred layout.
Settings Page: Users can go to a "Settings" page to modify their preferences (add/remove widgets, change categories, etc.).

4. Settings Page (For Personalization)
The Settings Page allows users to select and customize their widgets.
Features:
Widget Selection: Users can choose from a list of available widgets (e.g., News, Sports, Weather, Stocks).
Customization:
For news widgets, users can select specific categories (e.g., Tech, Entertainment, Sports).
For the weather widget, users can enter their location.
Save Settings: When the user saves their preferences, the configuration is updated in the database, and their personalized landing page is updated accordingly.