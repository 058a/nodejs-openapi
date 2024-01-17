// リクエストが成功すること
import { describe, it } from "node:test";
import assert from "node:assert";

it("正常系", async () => {
  // getメソッドを実行してレスポンスを取得する
  const response = await fetch("http://localhost:3000", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  // レスポンスのステータスコードとメッセージを検証するアサーションを行う
  assert.strictEqual(
    response.status,
    200,
    "ステータスコードが期待通りではありません"
  );
  assert.deepStrictEqual(
    JSON.parse(await response.text()),
    { message: "Ok" },
    "メッセージが期待通りではありません"
  );
});
