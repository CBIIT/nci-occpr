﻿<?php

/**
 * Implements template_preprocess_html().
 *
 */
//function STARTER_preprocess_html(&$variables) {
//  // Add conditional CSS for IE. To use uncomment below and add IE css file
//  drupal_add_css(path_to_theme() . '/css/ie.css', array('weight' => CSS_THEME, 'browsers' => array('!IE' => FALSE), 'preprocess' => FALSE));
//
//  // Need legacy support for IE downgrade to Foundation 2 or use JS file below
//  // drupal_add_js('http://ie7-js.googlecode.com/svn/version/2.1(beta4)/IE7.js', 'external');
//}

/**
 * Implements template_preprocess_page
 *
 */
//function STARTER_preprocess_page(&$variables) {
//}

/**
 * Implements template_preprocess_node
 *
 */
//function STARTER_preprocess_node(&$variables) {
//}

/**
 * Implements hook_preprocess_block()
 */
//function STARTER_preprocess_block(&$variables) {
//  // Add wrapping div with global class to all block content sections.
//  $variables['content_attributes_array']['class'][] = 'block-content';
//
//  // Convenience variable for classes based on block ID
//  $block_id = $variables['block']->module . '-' . $variables['block']->delta;
//
//  // Add classes based on a specific block
//  switch ($block_id) {
//    // System Navigation block
//    case 'system-navigation':
//      // Custom class for entire block
//      $variables['classes_array'][] = 'system-nav';
//      // Custom class for block title
//      $variables['title_attributes_array']['class'][] = 'system-nav-title';
//      // Wrapping div with custom class for block content
//      $variables['content_attributes_array']['class'] = 'system-nav-content';
//      break;
//
//    // User Login block
//    case 'user-login':
//      // Hide title
//      $variables['title_attributes_array']['class'][] = 'element-invisible';
//      break;
//
//    // Example of adding Foundation classes
//    case 'block-foo': // Target the block ID
//      // Set grid column or mobile classes or anything else you want.
//      $variables['classes_array'][] = 'six columns';
//      break;
//  }
//
//  // Add template suggestions for blocks from specific modules.
//  switch($variables['elements']['#block']->module) {
//    case 'menu':
//      $variables['theme_hook_suggestions'][] = 'block__nav';
//    break;
//  }
//}

//function STARTER_preprocess_views_view(&$variables) {
//}

/**
 * Implements template_preprocess_panels_pane().
 *
 */
//function STARTER_preprocess_panels_pane(&$variables) {
//}

/**
 * Implements template_preprocess_views_views_fields().
 *
 */
//function STARTER_preprocess_views_view_fields(&$variables) {
//}

/**
 * Implements theme_form_element_label()
 * Use foundation tooltips
 */
//function STARTER_form_element_label($variables) {
//  if (!empty($variables['element']['#title'])) {
//    $variables['element']['#title'] = '<span class="secondary label">' . $variables['element']['#title'] . '</span>';
//  }
//  if (!empty($variables['element']['#description'])) {
//    $variables['element']['#description'] = ' <span data-tooltip="top" class="has-tip tip-top" data-width="250" title="' . $variables['element']['#description'] . '">' . t('More information?') . '</span>';
//  }
//  return theme_form_element_label($variables);
//}

/**
 * Implements hook_preprocess_button().
 */
//function STARTER_preprocess_button(&$variables) {
//  $variables['element']['#attributes']['class'][] = 'button';
//  if (isset($variables['element']['#parents'][0]) && $variables['element']['#parents'][0] == 'submit') {
//    $variables['element']['#attributes']['class'][] = 'secondary';
//  }
//}

/**
 * Implements hook_form_alter()
 * Example of using foundation sexy buttons
 */
//function STARTER_form_alter(&$form, &$form_state, $form_id) {
//  // Sexy submit buttons
//  if (!empty($form['actions']) && !empty($form['actions']['submit'])) {
//    $classes = (is_array($form['actions']['submit']['#attributes']['class']))
//      ? $form['actions']['submit']['#attributes']['class']
//      : array();
//    $classes = array_merge($classes, array('secondary', 'button', 'radius'));
//    $form['actions']['submit']['#attributes']['class'] = $classes;
//  }
//}

/**
 * Implements hook_form_FORM_ID_alter()
 * Example of using foundation sexy buttons on comment form
 */
//function STARTER_form_comment_form_alter(&$form, &$form_state) {
  // Sexy preview buttons
//  $classes = (is_array($form['actions']['preview']['#attributes']['class']))
//    ? $form['actions']['preview']['#attributes']['class']
//    : array();
//  $classes = array_merge($classes, array('secondary', 'button', 'radius'));
//  $form['actions']['preview']['#attributes']['class'] = $classes;
//}


/**
 * Implements template_preprocess_panels_pane().
 */
// function zurb_foundation_preprocess_panels_pane(&$variables) {
// }

/**
* Implements template_preprocess_views_views_fields().
*/
/* Delete me to enable
function THEMENAME_preprocess_views_view_fields(&$variables) {
 if ($variables['view']->name == 'nodequeue_1') {

   // Check if we have both an image and a summary
   if (isset($variables['fields']['field_image'])) {

     // If a combined field has been created, unset it and just show image
     if (isset($variables['fields']['nothing'])) {
       unset($variables['fields']['nothing']);
     }

   } elseif (isset($variables['fields']['title'])) {
     unset ($variables['fields']['title']);
   }

   // Always unset the separate summary if set
   if (isset($variables['fields']['field_summary'])) {
     unset($variables['fields']['field_summary']);
   }
 }
}

// */

/**
 * Implements hook_css_alter().
 */
//function STARTER_css_alter(&$css) {
//  // Always remove base theme CSS.
//  $theme_path = drupal_get_path('theme', 'zurb_foundation');
//
//  foreach($css as $path => $values) {
//    if(strpos($path, $theme_path) === 0) {
//      unset($css[$path]);
//    }
//  }
//}

/**
 * Implements hook_js_alter().
 */
//function STARTER_js_alter(&$js) {
//  // Always remove base theme JS.
//  $theme_path = drupal_get_path('theme', 'zurb_foundation');
//
//  foreach($js as $path => $values) {
//    if(strpos($path, $theme_path) === 0) {
//      unset($js[$path]);
//    }
//  }
//}



/**
 * Implements hook_form_alter().
 */
function ncioccpr_form_alter(array &$form, array &$form_state = array(), $form_id = NULL) {
  if ($form_id) {
    switch ($form_id) {
//      case 'search_form':
//        // Add a clearfix class so the results don't overflow onto the form.
//        $form['#attributes']['class'][] = 'clearfix';
//
//        // Remove container-inline from the container classes.
//        $form['basic']['#attributes']['class'] = array();
//
//        // Hide the default button from display.
//        $form['basic']['submit']['#attributes']['class'][] = 'element-invisible';
//
//        // Implement a theme wrapper to add a submit button containing a search
//        // icon directly after the input element.
//        $form['basic']['keys']['#theme_wrappers'] = array('search_form_wrapper');
//        $form['basic']['keys']['#title'] = 'Search Site';
//        //control the width of the input           
//        $form['basic']['keys']['#attributes']['class'][] = 'wide input';
//        $form['basic']['keys']['#attributes']['placeholder'] = t('Search...');
//        $form['basic']['keys']['#attributes']['id'][] = 'search-form';
//
//        break;
      case 'search_block_form':
        $form['search_block_form']['#theme_wrappers'] = array('search_form_wrapper');
        $form['#attributes']['class'][] = 'form-search';
        $form['search_block_form']['#title'] = 'Search';
        $form['search_block_form']['#attributes']['placeholder'] = t('Search...');
        //control the width of the input
        $form['search_block_form']['#attributes']['class'][] = 'wide input headsearch';
        $form['search_block_form']['#attributes']['id'][] = 'search-form';

        // Hide the default button from display and implement a theme wrapper
        // to add a submit button containing a search icon directly after the
        // input element.
        $form['actions']['submit']['#attributes']['class'][] = 'element-invisible';


        // Apply a clearfix so the results don't overflow onto the form.
        $form['#attributes']['class'][] = 'content-search';
        break;
    }
  }
}

/**
 * Theme function implementation for MYTHEME_search_form_wrapper.
 */
function ncioccpr_search_form_wrapper($variables) {
  $output = '<div class="field append">';
  $output .= $variables['element']['#children'];
  $output .= '<button type="submit" class="medium primary btn small-4 headsearch-btn">';
  $output .= '<span class="icon-search entypo scale-lg"><label for="search-form">SEARCH</label></span>';
//  $output .= '<span class="element-invisible"><label for="search-block-form">' . t('Search') . '</label></span>';
  $output .= '</button>';
  $output .= '</div>';

  return $output;
}

/**
 * Stub implementation for hook_theme().
 *
 * @see MYTHEME_theme()
 * @see hook_theme()
 */
function ncioccpr_theme(&$existing, $type, $theme, $path) {
  // Custom theme hooks:
  // Do not define the `path` or `template`.
  $hook_theme = array(
    'search_form_wrapper' => array(
      'render element' => 'element',
    ),
  );

  return $hook_theme;
}

/** Removed content block from homepage **/
function ncioccpr_preprocess_page(&$variables) {
  if ($variables['is_front']) {
    $variables['title'] = '';
    unset($variables['page']['content']['system_main']['default_message']);
  }
}


/** Builds custom menu source **/
function ncioccpr_links__system_main_menu($variables) {
  $html = "<div>\n";
  $html .= "  <ul>\n";  
  foreach ($variables['links'] as $link) {
    $html .= "<li>".l($link['title'], $link['path'], $link)."</li>";
  }
  $html .= "  </ul>\n";
  $html .= "</div>\n";

  return $html;
}


/**
    * Process variables for search-result.tpl.php.
    *
    * @see search-result.tpl.php
    */
function ncioccpr_preprocess_search_result(&$variables) {
  // Remove user name and modification date from search results
  $variables['info'] = '';
}

