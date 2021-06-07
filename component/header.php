<?php if (!defined('__TYPECHO_ROOT_DIR__')) exit; ?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="<?php $this->options->charset(); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="renderer" content="webkit">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title><?php $this->archiveTitle(array(
            'category'  =>  _t('分类 %s 下的文章'),
            'search'    =>  _t('包含关键字 %s 的文章'),
            'tag'       =>  _t('标签 %s 下的文章'),
            'author'    =>  _t('%s 发布的文章')
        ), '', ' - '); ?><?php $this->options->title(); ?><?php if($this->is('index') && $this->options->vtitle)echo ' - '.$this->options->vtitle; ?></title>


    <?php $themeurl = "<?php echo $themeUrl; ?>"; ?>
    <link rel="stylesheet" href="<?php echo $themeUrl; ?>/css/bootstrap.min.css">
    <link rel="stylesheet" href="<?php echo $themeUrl; ?>/css/style.css">
    <script src="<?php echo $themeUrl; ?>/js/bootstrap.min.js"></script>
</head>
<body>
    <h1>Hello World!</h1>
    <p>Logo输出测试，请在后台添加logo<img src="<?php $this->options->logoUrl(); ?>"></p>