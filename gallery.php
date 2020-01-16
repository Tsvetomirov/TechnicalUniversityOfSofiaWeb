<?php

require_once("header.php");
?>
<h2 class = "gallery-header">Technical university of Sofia <Elfe> 2015-2017 pictures</h2>
<div class="gallery-container">
	
	<div class="feature">
		<figure class="featured-item image-holder r-3-2 transition"></figure>
	</div>
	
	<div class="gallery-wrapper">
		<div class="gallery">
				<div class="item-wrapper">
					<figure class="gallery-item image-holder r-3-2 active transition"></figure>
				</div>
				<div class="item-wrapper">
					<figure class="gallery-item image-holder r-3-2 transition"></figure>
				</div>
				<div class="item-wrapper">
					<figure class="gallery-item image-holder r-3-2 transition"></figure>
				</div>
				<div class="item-wrapper">
					<figure class="gallery-item image-holder r-3-2 transition"></figure>
				</div>
				<div class="item-wrapper">
					<figure class="gallery-item image-holder r-3-2"></figure>
				</div>
				<div class="item-wrapper">
					<figure class="gallery-item image-holder r-3-2 transition"></figure>
				</div>
				<div class="item-wrapper">
					<figure class="gallery-item image-holder r-3-2 transition"></figure>
				</div>
				<div class="item-wrapper">
					<figure class="gallery-item image-holder r-3-2 transition"></figure>
				</div>
				<div class="item-wrapper">
					<figure class="gallery-item image-holder r-3-2 transition"></figure>
				</div>
				<div class="item-wrapper">
					<figure class="gallery-item image-holder r-3-2 transition"></figure>
				</div>
		</div>
	</div>
	
	<div class="controls">
		<button class="move-btn left">&larr;</button>
		<button class="move-btn right">&rarr;</button>
	</div>
	
</div>

<script>
    var gallery = new Gallery();
    gallery.galleryAnimation();
</script>
<?php
require_once("footer.php");
?>