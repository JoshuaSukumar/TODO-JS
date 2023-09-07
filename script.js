let showPopup = document.getElementById('plus1');
let popUp = document.getElementById('popUp');
let headingSection = document.getElementById('headingSection');
let closepopup1 = document.getElementById('closepopup1');
let cardContainer = document.getElementById('cardContainer');
let temporaryTitle = document.getElementById('temporaryTitle');
let addCard = document.getElementById('addCard');
let input1 = document.getElementById('input1');
let seperateCard = document.getElementById('seperateCard');
let backButton = document.getElementById('backButton');
let mainTitle = document.getElementById('mainTitle');
let secondaryTitle = document.getElementById('secondaryTitle')
let maincontainer = document.getElementById('mainContainer');
let popUp2 = document.getElementById('popUp2');
let addcontent = document.getElementById('addcontent');



// function to show the first popup to add the list item
function showpopup() {
   popUp.classList.remove('hide');
   headingSection.classList.add('filter');
   cardContainer.classList.add('filter');
   temporaryTitle.classList.add('filter');
   seperateCard.classList.add('filter');
   
   // clearing the text inside input1
   input1.value = '';
}
showPopup.addEventListener('click', showpopup);

// function to close the first popup
function closepopup() {
   popUp.classList.add('hide');
   headingSection.classList.remove('filter');
   cardContainer.classList.remove('filter');
   temporaryTitle.classList.remove('filter');
   seperateCard.classList.remove('filter');
}
closepopup1.addEventListener('click', closepopup);



// function to add card through first popup
function addcarditem(){
   // creating the element
   let card = document.createElement('div');
   let cardTitle = document.createElement('h3');
   let horiline = document.createElement('hr');
   let itemContainer = document.createElement('div');   
   let buttoncontainer = document.createElement('div');
   let trash = document.createElement('i');
   let additem = document.createElement('i');


   // append the child 
   cardContainer.appendChild(card);
   card.appendChild(cardTitle);
   card.appendChild(horiline);
   card.appendChild(itemContainer);
   card.appendChild(buttoncontainer);
   buttoncontainer.appendChild(trash);
   buttoncontainer.appendChild(additem);
   

   // adding input value to cardTitle
   cardTitle.innerText = input1.value;

   // adding class styles
   card.classList.add('card');
   cardTitle.classList.add('cardTitle');
   itemContainer.classList.add('itemcontainer');
   buttoncontainer.classList.add('buttoncontainer');

   // button styles
   trash.className = 'fa-solid fa-trash-can trash';
   additem.className = 'fa-solid fa-circle-plus plus2';
   trash.setAttribute('id', 'dustbin');

   // if card is created temporary title should be hidden
   temporaryTitle.classList.add('hide');


   // function to remove card
   function deleteCard() {
      card.remove();
      // function to display the text inside the card container
      if(cardContainer.innerText === ''){
         temporaryTitle.classList.remove('hide');
      }
   }
   trash.addEventListener('click', deleteCard);


   // function to add item in the card container
   function addItem() {
      // creating elements
      let popUp2 = document.createElement('div');
      let popupTitle2 = document.createElement('h3');
      let input2 = document.createElement('input');
      let addcloseholder2 = document.createElement('div');
      let addCard2= document.createElement('button');
      let closepopup2 = document.createElement('button');

      // appending the elements
      maincontainer.appendChild(popUp2)
      popUp2.appendChild(popupTitle2)
      popUp2.appendChild(input2)
      popUp2.appendChild(addcloseholder2)
      addcloseholder2.appendChild(addCard2)
      addcloseholder2.appendChild(closepopup2)

      // adding class styles
      popUp2.classList.add('section2');
      popupTitle2.classList.add('popupTitle');
      input2.classList.add('input');
      addcloseholder2.classList.add('addcloseholder');
      addCard2.classList.add('btnstyle1');
      closepopup2.classList.add('btnstyle1');
      seperateCard.classList.add('filter');


      // input inside the element
      popupTitle2.innerText = 'Add New List';
      input2.setAttribute('type', 'text');
      input2.setAttribute('placeholder', 'Add New List');
      addCard2.innerText = 'Add';
      closepopup2.innerText = 'Close';

      // function to remove secondpopup
      function closepopup1(){
         popUp2.classList.add('hide');

         // adding blur effect
         headingSection.classList.remove('filter');
         cardContainer.classList.remove('filter');
         seperateCard.classList.remove('filter');
      }
      closepopup2.addEventListener('click', closepopup1);

      // function to add items
      function additem2(){
         // creating the element 
         let holder = document.createElement('div');
         let text1 = document.createElement('span');
         let markdone = document.createElement('button')



         // id attribute to markdone
         markdone.setAttribute('id', 'strikeLine');


         // appending the elements         
         itemContainer.appendChild(holder);
         holder.appendChild(text1);
         holder.appendChild(markdone);


         // adding the class styles
         text1.classList.add('item');
         markdone.classList.add('markdone');
         holder.classList.add('holder');


         // taking the input value
         text1.innerText = input2.value;
         markdone.innerText = 'mark done';

         // function when clicked on markdone
         function strike(){
            text1.classList.toggle('strike');
            text1.style.color = text1.classList.contains('strike') ? 'rgb(255, 72, 0)' : '';
            markdone.classList.add('hide');
         }
         markdone.addEventListener('click', strike);

      }
      addCard2.addEventListener('click', additem2);
      addCard2.addEventListener('click', closepopup1);


      // adding blur effect
      headingSection.classList.add('filter');
      cardContainer.classList.add('filter');
      cardContainer.classList.remove('hide');
   }
   additem.addEventListener('click', addItem);


   // cardTitle focus
   function single(){
      // coping the card
      let copyCard = card.cloneNode(true);
      seperateCard.appendChild(copyCard);


      // adding class styles
      cardContainer.classList.add('hide');
      backButton.classList.remove('hide');
      mainTitle.classList.add('hide');
      secondaryTitle.classList.remove('hide');

      // adding card title to secondary title
      secondaryTitle.innerText = cardTitle.innerText;

      // function to delete the card
      let trashIcon = copyCard.querySelector('.fa-trash-can');

      // function to delete the copied card as well as original card
      function deleteCopiedCard() {
         copyCard.remove();
         card.remove();
      }

      // attach the deleteCopiedCard function to the trash icon's click event
      trashIcon.addEventListener('click', deleteCopiedCard);
      trashIcon.addEventListener('click', back);


      // function to add the items
      let plusIcon = copyCard.querySelector('.fa-circle-plus');
      let itemcontainer2 = copyCard.querySelector('.itemcontainer');


      // calling the function on click
      // plusIcon.addEventListener('click', addItem);
      function addCopiedItem(){

         let popUp2 = document.createElement('div');
         let popupTitle2 = document.createElement('h3');
         let input2 = document.createElement('input');
         let addcloseholder2 = document.createElement('div');
         let addCard2= document.createElement('button');
         let closepopup2 = document.createElement('button');

         // appending the elements
         maincontainer.appendChild(popUp2)
         popUp2.appendChild(popupTitle2)
         popUp2.appendChild(input2)
         popUp2.appendChild(addcloseholder2)
         addcloseholder2.appendChild(addCard2)
         addcloseholder2.appendChild(closepopup2)

         // adding class styles
         popUp2.classList.add('section2');
         popupTitle2.classList.add('popupTitle');
         input2.classList.add('input');
         addcloseholder2.classList.add('addcloseholder');
         addCard2.classList.add('btnstyle1');
         closepopup2.classList.add('btnstyle1');
         seperateCard.classList.add('filter');


         // input inside the element
         popupTitle2.innerText = 'Add New List';
         input2.setAttribute('type', 'text');
         input2.setAttribute('placeholder', 'Add New List');
         addCard2.innerText = 'Add';
         closepopup2.innerText = 'Close';

          // function to remove secondpopup
         function closepopup1(){
            popUp2.classList.add('hide');

            // adding blur effect
            headingSection.classList.remove('filter');
            cardContainer.classList.remove('filter');
            seperateCard.classList.remove('filter');

            backButton.classList.remove('filter');
            plus1.classList.remove('filter');
            secondaryTitle.classList.remove('filter');
         }
         closepopup2.addEventListener('click', closepopup1);

         function additem2(){
            // creating the element 
            let holder = document.createElement('div');
            let text1 = document.createElement('span');
            let markdone = document.createElement('button');

            // creating the element for copied
            let holder2 = document.createElement('div');
            let text2 = document.createElement('span');
            let markdone2 = document.createElement('button')

            


            // appending the elements         
            itemcontainer2.appendChild(holder);
            itemContainer.appendChild(holder2);
            holder.appendChild(text1);
            holder2.appendChild(text2);
            holder.appendChild(markdone);
            holder2.appendChild(markdone2);


            // adding the class styles
            text1.classList.add('item');
            text2.classList.add('item');
            markdone.classList.add('markdone');
            markdone2.classList.add('markdone');
            holder.classList.add('holder');
            holder2.classList.add('holder');


            // taking the input value
            text1.innerText = input2.value;
            text2.innerText = input2.value;
            markdone.innerText = 'mark done';
            markdone2.innerText = 'mark done';

            // function when clicked on markdone
            function strike(){
               text1.classList.toggle('strike');
               text1.style.color = text1.classList.contains('strike') ? 'rgb(255, 72, 0)' : '';
               markdone.classList.add('hide');
            }
            markdone.addEventListener('click', strike);

            function strike2(){
               text2.classList.toggle('strike');
               text2.style.color = text2.classList.contains('strike') ? 'rgb(255, 72, 0)' : '';
               markdone2.classList.add('hide');
            }
            markdone.addEventListener('click', strike2);

         }
         addCard2.addEventListener('click', additem2);
         addCard2.addEventListener('click', closepopup1);

         backButton.classList.add('filter');
         plus1.classList.add('filter');
         secondaryTitle.classList.add('filter');



      }
      plusIcon.addEventListener('click', addCopiedItem);
      

      cardContainer.classList.add('hide');
      addcontent.classList.add('hide');
   }
   cardTitle.addEventListener('click', single);
}
addCard.addEventListener('click', addcarditem);

// calling the close function
addCard.addEventListener('click', closepopup);
addCard.addEventListener('click', back);

// function for back button
function back(){
   seperateCard.innerText = '';
   // adding class styles
   cardContainer.classList.remove('hide');
   backButton.classList.add('hide');
   mainTitle.classList.remove('hide');
   secondaryTitle.classList.add('hide');
   addcontent.classList.remove('hide');

}
backButton.addEventListener('click', back);
