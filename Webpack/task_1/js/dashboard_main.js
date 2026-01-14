import $ from 'jquery';
import _ from 'lodash';

// Elementləri Body-yə əlavə edirik
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

let count = 0;

function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

// Düyməyə klik hadisəsini debounce (500ms) ilə bağlayırıq
$('button').on('click', _.debounce(updateCounter, 500));