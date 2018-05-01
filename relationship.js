<!DOCTYPE html>
<script>
function find_related(idx, table) //idx is the index of professor 1
{
	var relation_array = [];
	for ( var i = 0; i < 98; i ++ ) 
	{
		if (i != idx) 
		{
			if (table[i].R1 == table[idx].R1 || table[i].R1 == table[idx].R2 || table[i].R1 == table[idx].R3 || table[i].R1 == table[idx].R4 || table[i].R1 == table[idx].R5)
			{
				relation_array.push(i);
				relation_array.push(table[i].R1);
				continue;
			}

			if (table[i].R2 == table[idx].R1 || table[i].R1 == table[idx].R2 || table[i].R1 == table[idx].R3 || table[i].R1 == table[idx].R4 || table[i].R1 == table[idx].R5)
			{
				relation_array.push(i);
				relation_array.push(table[i].R2);
				continue;
			}

			if (table[i].R3 == table[idx].R1 || table[i].R1 == table[idx].R2 || table[i].R1 == table[idx].R3 || table[i].R1 == table[idx].R4 || table[i].R1 == table[idx].R5)
			{
				relation_array.push(i);
				relation_array.push(table[i].R3);
				continue;
			}

			if (table[i].R4 == table[idx].R1 || table[i].R1 == table[idx].R2 || table[i].R1 == table[idx].R3 || table[i].R1 == table[idx].R4 || table[i].R1 == table[idx].R5)
			{
				relation_array.push(i);
				relation_array.push(table[i].R4);
				continue;
			}

			if (table[i].R5 == table[idx].R1 || table[i].R1 == table[idx].R2 || table[i].R1 == table[idx].R3 || table[i].R1 == table[idx].R4 || table[i].R1 == table[idx].R5)
			{
				relation_array.push(i);
				relation_array.push(table[i].R5);
				continue;
			}			
		}
	}
	return relation_array;
}

function department_range(idx) //idx of professor
{
	if(idx >= 0 && idx <= 27)
		return [0, 27];
	if(idx >27 && idx <= 51)
		return [28, 51];
	if(idx > 51 && idx <= 56)
		return [52, 56];
	if(idx > 56 && idx <= 97)
		return [57, 97];
	else
		return -1;
}
</script>

