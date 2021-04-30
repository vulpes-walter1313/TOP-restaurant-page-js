function contactTab(section) {
    section.innerHTML = `<h2>Contact Us</h2><form action="" method="get" class="contact-form">
    <label for="name-in">Enter your name</label>
    <input type="text" name="name" id="name-in">
    <label for="email-in">Enter your email</label>
    <input type="email" name="email" id="email-in">
    <textarea id="story" name="story">I would like to tell you...
    </textarea>
    <button>Submit</button>
  </form>`;
  return section;
}

export default contactTab;