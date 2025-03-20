document.addEventListener("DOMContentLoaded", function () {
  let navItems = document.querySelectorAll(".link");

  navItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.color = "white";
      this.style.backgroundColor = "black";
      this.style.borderColor = "white";
    this.style.borderStyle = "solid";
      

    });

    item.addEventListener("mouseleave", function () {
      this.style.color = "";
      this.style.backgroundColor = "";
      this.style.borderStyle = "";
      
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let navItems = document.querySelectorAll(".navitem");

  navItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.color = "white";
      this.style.backgroundColor = "black";
    });

    item.addEventListener("mouseleave", function () {
      this.style.color = "";
      this.style.backgroundColor = "";
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let navItems = document.querySelectorAll("#selectlang, #selectwork, #selectcourse");

  navItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.backgroundColor = "orange";
    });

    item.addEventListener("mouseleave", function () {
      this.style.color = "";
      this.style.backgroundColor = "";
    });
  });
});

function updateContent(newContent) {
        displayDiv.innerHTML = newContent;
    }

const displayDiv = document.getElementById("display");

document.getElementById("selectcourse").addEventListener("click", function (event) {
        updateContent("\<div class=\"courses col\"><h4>Current courseload:</h4>\
      <ul>\
        <li>CS380 User Interfaces</li>\
        <li>ANT214 Anthropology of Language</li>\
        <li>SPN405 Translation</li>\
      </ul>\
    </div>");
});

document.getElementById("selectwork").addEventListener("click", function (event) {
        updateContent("  <div class=\"work col\">\
      <h4>Work Experience</h4>\
      <table>\
        <thead>\
          <tr>\
            <th>Company</th>\
            <th>Position</th>\
          </tr>\
        </thead>\
        <tbody>\
          <tr>\
            <td>Union College</td>\
            <td>Computer Science Research Assistant</td>\
          </tr>\
          <tr>\
            <td>Good Filling</td>\
            <td>Maintenance Lead</td>\
          </tr>\
          <tr>\
            <td>Manhattan Exchange</td>\
            <td>Waitstaff</td>\
          </tr>\
        </tbody>\
      </table>\
    </div>");
});

document.getElementById("selectlang").addEventListener("click", function (event) {
    updateContent('<div class="lang col">\
      <h4>Language Proficiencies</h4>\
      <ul>\
        <li>Java</li>\
        <li>Python</li>\
        <li>HTML</li>\
        <li>CSS</li>\
        <li>C#</li>\
        <li>Javascript</li>\
      </ul>\
    </div>');
});