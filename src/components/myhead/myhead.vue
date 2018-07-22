<template>
	<div id="my-head">
		<slot></slot>
	</div>
</template>
<script>
export default {
}
</script>
<style scoped lang='less'>
@import url('../../style/base.less');
	#my-head{
		.titleStyle(@mallColor,@titleSize,center,white);
		height:@navHeight;
		line-height:@navHeight;
		.Fixed();
		z-index:10;
	}
	.back{
      position: absolute;
      top:(44px-30px)/2;
      left:8px;
      font-size:30px;
    }

</style>