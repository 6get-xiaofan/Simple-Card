<?php
/**
 * Simple Card 是 XiaoFans 开发的一套 Typecho卡片风格玻璃主题 模板。<br><p style="color: red;">警告：Alpha 版本，不可用于生产环境。</p>
 * 
 * @package Simple-Card
 * @author XiaoFans
 * @version Alpha 0.1
 * @link https://github.com/6get-xiaofan/Simple-Card
 */

if (!defined('__TYPECHO_ROOT_DIR__')) exit;
 //调用头部
 $this->need('component/header.php');
 ?>
<div class="row clearfix">
		<div class="col-md-4 column">
            <!-- music & user -->
            <div class="row clearfix">
				<div class="col-md-12 column">
                    <div class="simple_music"></div>
				</div>
			</div>
			<div class="row clearfix" id="row_clear">
				<div class="col-md-12 column">
                <div class="simple_user"></div>
				</div>
			</div>

		</div>
		<div class="col-md-8 column">
            <!-- carousel -->
            <div class="carousel"></div>
		</div>
	</div>
    <div class="row clearfix">
		<div class="col-md-3 column">
		</div>
		<div class="col-md-8 column">
		</div>
		<div class="col-md-1 column">
		</div>
	</div>
</div>
<!-- 调用尾部 -->
 <?php $this->need('component/footer.php'); ?>