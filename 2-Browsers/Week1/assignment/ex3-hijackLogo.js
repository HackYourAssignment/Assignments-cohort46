'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-3-the-logo-hijack

1. Find out how to select the element that contains the Google logo, and store 
   it in a variable.
2. Modify the `src` and `srcset` of the logo so that it's replaced by the 
   HackYourFuture logo instead.
------------------------------------------------------------------------------*/
function hijackGoogleLogo() {
  // Inspected the class name for the Google logo is "lnXdpd"
  const googleLogoElements = document.getElementsByClassName('lnXdpd');

  // If there are multiple elements with the same class, select the first one
  const googleLogoElement = googleLogoElements[0];

  // Set the new src and srcset attributes
  googleLogoElement.src =
    'https://assets-global.website-files.com/62745a1007e49e2461fb7ecd/62745a1007e49e6f2afb7fd1_HYF.svg';
  googleLogoElement.srcset = ''; // Clear srcset attribute, if present
}

hijackGoogleLogo();
