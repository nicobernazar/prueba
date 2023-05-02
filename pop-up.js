function showPopup() {
    var popupBackground = document.getElementById('popup-background');
    popupBackground.style.display = 'flex';
  
    var closeButton = document.getElementById('close-popup');
    closeButton.addEventListener('click', hidePopup);
  }
  
  function hidePopup() {
    var popupBackground = document.getElementById('popup-background');
    popupBackground.style.display = 'none';
  }
  
  window.onload = function() {
    showPopup();
  };