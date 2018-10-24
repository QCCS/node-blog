/**
 * Created by zhouli on 18/10/22
 */
import test from 'ava';
import service from '../../src/service';
test('service import is ok', t => {
    let i = 0;
    for(let key in service){
        i++;
    }
    t.is(i, 15);
});

