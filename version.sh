export VERSION=$(sh read-package-version.sh)
sed -i '19s/$/'${VERSION}'/' frontend-deployment.yaml