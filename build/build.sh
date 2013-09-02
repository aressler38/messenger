messenger="../messenger.js";
output="../messenger_amd.js";

echo "define(function(){" > $output;
cat $messenger >> $output;
echo " " >> $output;
echo "return Messenger;});" >> $output;
echo " ";
echo "finished building";
echo " ";
