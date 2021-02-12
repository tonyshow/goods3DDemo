
import { _decorator, Component, Node, Prefab, instantiate, Vec3, RigidBody } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Typescript')
export class Typescript extends Component {

  @property({ type: Prefab })
  prefabNode: Prefab[] = [];

  cnt=0;
  currCnt=0;
  start() {
    this.creates();
    setInterval(this.creates.bind(this),5000)
  }

  creates() {
    if(this.cnt>300){
       return
    }
    ++this.cnt;

    for (let i = 0; i < 100; ++i) {
      let id = this.currCnt % this.prefabNode.length;
      ++this.currCnt;
      let node = instantiate(this.prefabNode[id]);
      let body = node.addComponent(RigidBody);
      if(!!body){
        body.mass=100;
        body.linearDamping=0.1;
        body.angularDamping=0.1;
        body.linearFactor = new Vec3(1,1,1)
        body.angularFactor = new Vec3(1,1,1)
      }


      let x = Math.random() * 5 * (Math.random() > 0.5 ? -1 : 1);
      let y = 15
      let z = Math.random() * 8 * (Math.random() > 0.5 ? -1 : 1);
      let v = new Vec3(x, y, z);
      node.setPosition(v);
      node.eulerAngles = new Vec3(Math.random() * 180, Math.random() * 180, Math.random() * 180)
      this.node.addChild(node)
    }
  }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
 */
