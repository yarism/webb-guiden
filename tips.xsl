<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html>
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
	<title>RSS-tips från webb-guiden</title>
</head>

<body>
    	<h2>Nyheter</h2>
        <xsl:apply-templates select="rss/channel/item"/>
</body>
</html>

</xsl:template>


<xsl:template match="item">

	<h4><xsl:value-of select="title"/></h4>
    <p><xsl:value-of select="description"/></p>
    
    <a target="_blank">
	 <xsl:attribute name="href">
    	<xsl:value-of select="link"/>
    		</xsl:attribute>
            Läs mer
    </a>
    
</xsl:template>

</xsl:stylesheet>