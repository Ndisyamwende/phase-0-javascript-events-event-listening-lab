function addingEventListeners() {
document.addEventListener('click', function(event) {
    alert('i was clicked!');
  });
  
  const input = document.getElementById('input');
  
  function clickAlert() {
    alert('I was clicked!');
  }
  
  input.addEventListener('click', clickAlert); 
}