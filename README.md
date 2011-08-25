# silverstripe-colorpicker

The ColorPicker Module adds a color-picker input field to the SilverStripe CMS. It makes use of the ColorPicker jQuery Plugin.

## History

This module was taken from http://bummzack.ch/colorpicker/ and is the work of Roman Schmid, AKA banal. There is more infomration regarding the history of this module at http://www.silverstripe.org/customising-the-cms/show/6114

Dimension27 have created a git repo for it so as it can easily be reused in silverstripe projects.

## Current Version

1.0

## Installation

1. Clone repo, i.e. git clone git://github.com/dimension27/silverstripe-colorpicker.git colorpicker
2. Run /dev/build
3. Make use of the ColorField

## Usage

Adding a ColorField to your Page is as simple as this:

```php
// place this inside your getCMSFields method
$fields->addFieldToTab(
    'Root.Content.Main', 
    new ColorField('BgColor', 'Background Color')
); 
```

