import * as CodeGenerator from '@alilc/lowcode-code-generator/standalone-loader';
import schema from './schema.json';

// 如果需要，先执行初始化，可提升首次出码速度

(
    async () => {
        await CodeGenerator.init();
        const workerJsUrl = new URL('./standalone-worker.js', import.meta.url).href;
        // schema 就是你从低代码平台导出的 schema
        const result = await CodeGenerator.generateCode({
          solution: 'icejs',  // 或你自定义的方案
          schema,
          flattenResult: true, // 是否生成扁平化结构
          workerJsUrl: workerJsUrl, // 指定 worker.js 路径
        //   workerJsUrl: 'https://cdn.jsdelivr.net/npm/@alilc/lowcode-code-generator@latest/dist/standalone-worker.js', // 指定 worker.js 路径
        });
        console.log('出码结果：', result);
    }
)()

