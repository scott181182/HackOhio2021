using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class userMove : MonoBehaviour
{
    public CharacterController controller;
    public float speed;
    public float gravity = -9f;

    Vector3 velocity;

    void Start()
    {
        speed = 12f;
    }

    // Update is called once per frame
    void Update()
    {
        float x = Input.GetAxis("Horizontal");
        float z = Input.GetAxis("Vertical");

        Vector3 move = transform.right * x + transform.forward * z;
        controller.Move(move * speed * Time.deltaTime);

        velocity.y += gravity * Time.deltaTime;
        
        controller.Move(velocity * Time.deltaTime);

        
    }
}
