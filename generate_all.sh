for config in configs/* ; do
    service=`echo $config | cut -d'/' -f 2 | cut -d'.' -f 1`
    ./generate.sh $service
done