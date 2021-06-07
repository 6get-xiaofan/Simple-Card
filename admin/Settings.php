<?php
/**
 * Settings.php
 * description: 后台设置页
 */

function themeConfig($form) {
    $logoUrl = new Typecho_Widget_Helper_Form_Element_Text('logoUrl', NULL, NULL, _t('站点 LOGO 地址'), _t('在这里填入一个图片 URL 地址, 以在网站标题前加上一个 LOGO'));
    $form->addInput($logoUrl);

    $yiYan = new Typecho_Widget_Helper_Form_Element_Text('yiYan', NULL, '<script src="https://api.sunjianjian.com/api/words?type=js"></script>', _t('一言接口'), _t('在这里填入一个一言API, 以在网站 LOGO 左侧显示一言,通常它是<scrept>标签形式存在'));
    $form->addInput($yiYan);

    $icoLogo = new Typecho_Widget_Helper_Form_Element_Text('icoLogo', NULL, 'favicon.ico', _t('标签Logo'), _t('在这里填入一个标签logo，通常以链接形式存在'));
    $form->addInput($icoLogo);
}