<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="pragma" content="no-cache"> 
    <meta http-equiv="Cache-Control" content="no-cache, must-revalidate"> 
    <meta http-equiv="expires" content="0">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Web前端性能测试</title>
    <meta name="keywords" content="web前端,性能,测试,优化">
    <meta name="description" content="对Web前端进行性能优化，并进行对比">
    <link rel="stylesheet" type="text/css" href="../css/uncompressed/bootstrap.css" />
    <link rel="stylesheet" type="text/css" href="../css/uncompressed/bootstrap-theme.css" />
    <link rel="stylesheet" type="text/css" href="../css/uncompressed/index.css" />
    <link rel="stylesheet" type="text/css" href="../css/uncompressed/test.css" />
</head>
<body>
    <div class="container dom-hidden">
        <ul id="dom-container"></ul>
        <img src="../img/compressed/1.jpg">
    </div>
    <div class="container dom-show">
        <h1>DOM操作优化测试</h1>
        <label for="dom-times">输入DOM操作次数</label>
        <input type="number" id="dom-times" />
        <button class="btn btn-small" id="btn-dom-submit">开始</button>
        <table class="table">
            <thead>
                <tr>
                    <th>添加列表数</th>
                    <th>优化前</th>
                    <th>优化方案一</th>
                    <th>优化方案二</th>
                </tr>
            </thead>
            <tbody id="record">
                
            </tbody>
        </table>
    </div>
</body>
<script type="text/javascript" src="../js/uncompressed/jquery-1.12.1.js"></script>
<script type="text/javascript" src="../js/uncompressed/bootstrap.js"></script>
<script type="text/javascript" src="../js/uncompressed/index.js"></script>
</html>