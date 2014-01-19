var showSubSection = function(event) {
      var category = $(event.target).closest('.category').attr('data-category');
      var categorySubsection = $(event.target).closest('.category-subsection').attr('data-subcategory');
      $('.category-subsection').addClass('visible');
      if(category !== undefined) {
        getSubSection(category, function(category) {

        });
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
    };

//listeners
$('.category').on('mouseover', showSubSection);
$('.category').on('mouseout', hideSubSection);

$('.category-subsection').on('mouseover', showSubSection);
$('.category-subsection').on('mouseout', hideSubSection);



$(document).ready(function() {
  console.log($('object').attr('height'));
  $('object').attr('height', '400');
})