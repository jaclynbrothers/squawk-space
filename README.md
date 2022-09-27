# Squawk Space
Squawk Space is a full stack web application for students, teachers, and speech therapists. Students can practice their communication skills by creating posts, asking open-ended questions, and making supportive comments on a variety of interests/hobbies in a welcoming and inclusive environment. Once users create an account, they have the ability to make posts, comments, like another user's post, and delete their comments.

**Link to project:** https://squawk-space.onrender.com/

## How It's Made

**Tech used:** Embedded JavaScript (EJS), CSS, Bootstrap, Node, Express, MongoDB, and Cloudinary.

# Required Dependencies

  - `npm install`
  - Create a `.env` file in config folder and add the following as `key = value`
  - PORT = 2121 (can be any port example: 3000)
  - DB_STRING = `your database URI`
  - CLOUD_NAME = `your cloudinary cloud name`
  - API_KEY = `your cloudinary api key`
  - API_SECRET = `your cloudinary api secret`
  - Add a .gitignore file with `config.env` and `node_modules`

---

# Run

`npm start`

---

I had the idea to create "Squawk Space" from my previous background as a speech therapist. Many students in virtual and in-person school settings discussed challenges with initiating, maintaining, and clarifying conversations with their peers and teachers. I also had students in remote classes that shared they wish they could interact more with others outside of their virtual classroom. The difficulty of understanding others increases with written or text-based communication. I decided to create a full stack social media application for students and supportive school staff where students could practice and get feedback on their communication skills while forming friendships with other peers.

First, I brainstormed the general layout and installed the required dependencies I would need for the application, such as bcrypt to hash passwords for security, morgan for the middleware to log HTTP requests, and passport for authentication. Then, I created the models using a Mongoose schema to serve as a blueprint for MongoDB. After establishing the different models and data that would be needed, I used Cloudinary to store images and provide urls for MongoDB to access. Next, I found the logo and font I would use from freelogodesign.org. I also used components from Bootstrap to complete the styling on all of the different pages. 

I utilized server-side JavaScript to connect the Model-View-Controller architecture to all of its different components, such as having each route navigate to the correct controller, model, back to the controller, and then the views section where EJS rendered the client-side HTML. In addition, partials were used for the reusable code in the header and footer that would appear on each page.

## Optimizations
I would continue to refactor the existing code to improve the overall functionality of the application and add Google authentication as well. 

## Lessons Learned
I learned how to implement Bootstrap components into the application for improved styling and utilized the DRY (don't repeat yourself) principle in the partials section in order to share styling across multiple pages.

## Credits
Parrot Logo by freelogodesign.org

Photo of Four Friends by <a href="https://unsplash.com/@wildlittlethingsphoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Helena Lopes</a> on Unsplash.com

## Other Projects

**Coming Soon**