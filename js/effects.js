var changeCategory = false,
    showSubSection = function(event) {
      event.stopPropagation();
      event.preventDefault();
      var category = $(event.target).closest('.category').attr('data-category'),
          categorySubsection = $(event.target).closest('.category-subsection').attr('data-subcategory'),
          subSectionDisplace = 0;

      $('.category-subsection').addClass('visible');
      if(category !== undefined) {
        subSectionDisplace = document.getElementById(category.toLowerCase()).style.getPropertyValue('left');
        console.log(subSectionDisplace);

        if(changeCategory == true) {
          $('.inner-subsection').stop();
          $('.inner-subsection').animate({
            'left': '-' + subSectionDisplace
          }, 1000);
        } else {
          $('.inner-subsection').css('left', '-' + subSectionDisplace);
          changeCategory = true;
        }

      } else {
        $('.category[data-category=' + categorySubsection + ']').addClass('active');

      }
    },
    hideSubSection = function(event) {
      $('.category-subsection').removeClass('visible');
      $('.category').removeClass('active');
    }
    getSubSection = function(category, callback) {
      $('.category-subsection').attr('data-subcategory', category);
      
      $
    },
    orderSubCategories = function() {

      $('.inner-subsection').css({
        'width': $('.subsection-articles').length*100 + '%'
      });

      $('.subsection-articles').each(function(index) {
        $(this).css({
          'width': window.innerWidth + 'px',
          'left': (window.innerWidth*index) + 'px'
        });
      });
    };

//listeners
$('.category').on('mouseover', showSubSection);
$('.category').on('mouseout', hideSubSection);

$('.category-subsection').on('mouseover', showSubSection);
$('.category-subsection').on('mouseout', hideSubSection);

$('body').on('mouseover', function () {
  console.log('whata');
  $('.inner-subsection').css('left', 0);
  changeCategory = false;
});



$(document).ready(function() {
  orderSubCategories();
})