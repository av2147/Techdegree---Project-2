const students = document.querySelectorAll('li.student-item');
const studentsPerPage = 10;

function showPage(pageNumber, studentList) {
const pagesNeeded = Math.ceil(studentList.length / studentsPerPage);
  // first hide all students on the page
  $(students).hide();
  // Then loop through all students in our student list argument
  for (let c = 0; c < studentList.length; c++) {
      //Looping through each available page
      for (let i = 1; i <= pagesNeeded; i++) {
          //if student should be on the page
          if (pageNumber === i && c >= 0 + (studentsPerPage * (pageNumber - 1)) && c <= 9 + (studentsPerPage * (pageNumber - 1)) ) {
              //show the student
              studentList[c].style.display = "block";
          }
      }

  }
 }

function appendPageLinks(studentList) {
// determine how many pages for this student list
const pagesNeeded = Math.ceil(studentList.length / studentsPerPage);
// create a page link section
const $linkDiv = $('<div class="pagination"></div>');
$('.page').append($linkDiv);
const ul = document.createElement('ul');
$('.pagination').append(ul);
// "for" every page
for (let i = 1; i <= pagesNeeded; i++){
  // add a page link to the page link section
  const $li = $(`<li> <a href="#" >${i}</a></li>`);
  $('.pagination ul').append($li);
}

$('.pagination a').click(function () {
    //retrieving the page number from the text content of each link
    const pageNumber = parseInt($(this).text());
    //removing the "active" class from all links
    $('.pagination a').removeClass('active');
    //adding the "active" class to the clicked page link
    $(this).addClass('active');

    //calling the "showPage" function
    showPage(pageNumber, studentList);
});
//adding a "active" class to the first page link
$('.pagination a').first().addClass('active');

//calling the "showPage" function with page 1 being loaded
showPage(1, studentList);

}
//calling "appendPageLinks" function to load the list of students
appendPageLinks(students);
