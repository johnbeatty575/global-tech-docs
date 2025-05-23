<?xml version="1.0" encoding="UTF-8"?><!--
This file is part of the DITA Open Toolkit project.

Copyright 2011 Jarno Elovirta

See the accompanying LICENSE file for applicable license.
--><xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="3.0">
  
  <xsl:import href="plugin:org.dita.pdf2:xsl/fo/topic2fo.xsl"/>

  <xsl:import href="plugin:org.dita.pdf2.fop:cfg/fo/attrs/commons-attr_fop.xsl"/>
  <xsl:import href="plugin:org.dita.pdf2.fop:cfg/fo/attrs/tables-attr_fop.xsl"/>
  <xsl:import href="plugin:org.dita.pdf2.fop:xsl/fo/root-processing_fop.xsl"/>
  <xsl:import href="plugin:org.dita.pdf2.fop:xsl/fo/tables_fop.xsl"/>
  <xsl:import href="plugin:org.dita.pdf2.fop:xsl/fo/index_fop.xsl"/>
  <xsl:import href="plugin:org.dita.pdf2.fop:xsl/fo/topic_fop.xsl"/>

  <xsl:import xmlns:dita="http://dita-ot.sourceforge.net" href="plugin:org.lwdita:xsl/linebreak2fo.xsl"/>

  <xsl:import href="cfg:fo/attrs/custom.xsl"/>
  <xsl:import href="cfg:fo/xsl/custom.xsl"/>
  
</xsl:stylesheet>