# Use the latest DITA-OT image ↓ as parent:
FROM ghcr.io/dita-ot/dita-ot:4.3.1

# Install a custom plug-in from a remote location:
RUN dita --install https://github.com/infotexture/dita-bootstrap/archive/master.zip

# Install from the registry at dita-ot.org/plugins:
RUN dita --install org.dita-community.pdf-page-break
