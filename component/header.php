<?php if (!defined('__TYPECHO_ROOT_DIR__')) exit; ?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="<?php $this->options->charset(); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="renderer" content="webkit">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no">
    
    <title><?php $this->archiveTitle(array(
            'category'  =>  _t('分类 %s 下的文章'),
            'search'    =>  _t('包含关键字 %s 的文章'),
            'tag'       =>  _t('标签 %s 下的文章'),
            'author'    =>  _t('%s 发布的文章')
        ), '', ' - '); ?><?php $this->options->title(); ?><?php if($this->is('index') && $this->options->vtitle)echo ' - '.$this->options->vtitle; ?></title>

    <!-- 资源引入 -->
    <link rel="icon" href="<?php $this->options->themeUrl(); $this->options->icoLogo(); ?>" sizes="64x64">
    <link rel="stylesheet" href="<?php $this->options->themeUrl(); ?>css/bootstrap.min.css">
    <link rel="stylesheet" href="<?php $this->options->themeUrl(); ?>css/style.css">
    <link rel="stylesheet" href="<?php $this->options->themeUrl(); ?>css/search-form.css">
    <script src="<?php $this->options->themeUrl(); ?>js/jquery-3.4.1.min.js"></script>
    <script src="<?php $this->options->themeUrl(); ?>js/carousel.js"></script>
    <script src="<?php $this->options->themeUrl(); ?>js/all.min.js"></script>

    <!-- 其他来源引入 -->
    <?php $this->header(); ?>
</head>
<body>

<div class="container-xl">
	<div class="row clearfix"> 
		<div class="col-md-12 column">
            <div class="simple_nav">
			<div class="row clearfix">
				<div class="col-md-5 column">
					<p class="text-left">
                    <?php $this->options->yiYan(); ?>					
                    </p>
				</div>
				<div class="col-md-2 column">
                    <img class="rounded mx-auto d-block" style="max-height: 59px;" src="<?php $this->options->themeUrl(); $this->options->logoUrl(); ?>">		
                </div>
				<div class="col-md-5 column">
                    <span> </span>
                    <span><section class="container">
		<form onsubmit="submitFn(this, event);">
            <div class="search-wrapper">
                <div class="input-holder">
                    <input type="text" class="search-input" placeholder="Type to search" />
                    <button class="search-icon" onclick="searchToggle(this, event);"><span style="top: -5px;"></span></button>
                </div>
                <span class="close" onclick="searchToggle(this, event);"></span>
                <div class="result-container">

                </div>
            </div>
        </form>
	</section></span>
                </div>
			</div>
		</div>
    </div>
	</div>

