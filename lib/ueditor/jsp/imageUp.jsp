    <%@ page language="java" contentType="text/html; charset=utf-8"
             pageEncoding="utf-8"%>
        <%@ page import="java.util.Properties" %>
        <%@ page import="java.util.List" %>
        <%@ page import="java.util.Iterator" %>
        <%@ page import="java.util.Arrays" %>
        <%@ page import="java.io.FileInputStream" %>
        <%@ page import="com.scjlcs.core.utils.Uploader" %>
        <%@ page import="java.io.File" %>
        <%@ page import="java.util.Map" %>
        <%@ page import="com.scjlcs.core.utils.Constant" %>
		<%@ page import="com.scjlcs.core.utils.PropertiesUtils" %>
<%

request.setCharacterEncoding( Uploader.ENCODEING );
response.setCharacterEncoding( Uploader.ENCODEING );


String savePath = Constant.VANDA_FILE_UEDITOR_PICTURE;

//获取存储目录结构
if ( request.getParameter( "fetch" ) != null ) {

    response.setHeader( "Content-Type", "text/javascript" );

    String dirs = "[";

    dirs += "'" + savePath +"'";

    dirs += "]";    
    response.getWriter().print( "updateSavePath( "+ dirs +" );" );
    return;

}

Uploader up = new Uploader(request);

// 获取前端提交的path路径
String dir = request.getParameter( "dir" );


//普通请求中拿不到参数， 则从上传表单中拿
if ( dir == null ) {
	dir = up.getParameter("dir");
}

if ( dir == null || "".equals( dir ) ) {

    //赋予默认值
    dir = savePath;

    //安全验证
} else if ( !savePath.contains( dir ) ) {

    response.getWriter().print( "{'state':'\\u975e\\u6cd5\\u4e0a\\u4f20\\u76ee\\u5f55'}" );
    return;

}

up.setSavePath( dir );
String[] fileType = {".gif" , ".png" , ".jpg" , ".jpeg" , ".bmp"};
up.setAllowFiles(fileType);
up.setMaxSize(500 * 1024); //单位KB
up.upload();
response.getWriter().print("{'url':'"+up.getUrl()+"','fileType':'"+up.getType()+"','state':'"+up.getState()+"','original':'"+up.getOriginalName()+"'}");
%>
