/**
 * 小明是一个生物工程学家，最近他得到了一份十分满意的工作，因为工作的内容并不难，但是酬劳却很高。
 *
 * 这份工作是关于细胞研究的。第一次实验的开始，在试管中只有1个细胞。
 * 每一秒一个细胞会分裂为k个细胞，并且在某些不同寻常的生理反应下，会产生额外的b个细胞。
 * 因此，如果在一秒钟的开始，试管中有x个细胞，那么这一秒的结束，试管中就会有kx+b个细胞。
 *
 * 实验结果显示，在n秒结束的那一刻，试管中一共有z个细胞。
 * 第二次实验开始之前，小明给试管完全消毒，并准备放入t个细胞。
 * 但是这次，他不急着开始实验，他想知道至少要经过多少秒之后，试管中可以至少有z个细胞。
 * 第二次实验的细胞产生的规律和第一次实验是完全相同的。
 * 请你帮助小明计算一下在第二个实验中产生至少z个细胞，最少需要多少秒。
 * 输入描述：
 * 一行4个整数，k，b，n，t，每两个整数之间用一个空格隔开，含义如题所述。
 * 满足1<=k,b,n,t <=10~6。
 * 输出描述：
 * 一个整数，表示最少的时间。
 *
 * 示例1 输入输出示例仅供调试，后台判题数据一般不包含示例
 * 1 1 1 1
 * 输出
 * 1
 * 示例2 输入输出示例仅供调试，后台判题数据一般不包含示例
 * 输入
 * 2 2 3 3
 * 输出
 * 3
 */
const K = 1,
  B = 1,
  N = 1,
  T = 1,
  getZ = (x, k = K, b = B, n = N) => {
    return (k * x + b) * n;
  },
  getN = (z = 0, x = T, k = K, b = B) => {
    return Math.ceil(z / (k * x + b));
  };

let num = getZ(1);

console.log(`最少的时间：${getN(num)}`);
